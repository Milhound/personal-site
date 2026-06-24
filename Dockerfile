FROM node:20-alpine AS base

WORKDIR /app

FROM base AS deps

COPY package*.json ./
COPY client/package*.json client/

RUN bun ci
RUN bun ci --prefix client

FROM deps AS build

COPY . .

RUN bun run build

FROM base AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY --from=deps /app/package*.json ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/server.ts ./server.ts
COPY --from=build /app/client/dist ./client/dist

EXPOSE 3001

CMD ["bun", "start"]