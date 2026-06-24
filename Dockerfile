FROM oven/bun:alpine AS base

WORKDIR /app

FROM base AS deps

COPY package*.json bun.lock ./
COPY client/package*.json client/bun.lock client/

RUN bun ci
RUN bun ci --cwd client

FROM deps AS build

COPY . .

RUN bun build ./server.ts --outdir ./build --target bun
RUN cd client && bun run build

FROM base AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY --from=deps /app/package*.json ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY --from=build /app/client/dist ./client/dist

EXPOSE 3001

CMD ["bun", "start"]