# 1. Dùng Node 20 bản alpine
FROM node:20-alpine

WORKDIR /app

# 2. Sao chép file cấu hình của Yarn vào trước
COPY package.json yarn.lock ./

# 3. Ép Docker cài đúng phiên bản bằng Yarn (Thay vì npm install)
RUN yarn install --frozen-lockfile

# 4. Sao chép toàn bộ mã nguồn vào
COPY . .

# 5. Chạy lệnh build của Yarn
RUN yarn build

# 6. Mở cổng 3000
EXPOSE 3000

# 7. Khởi chạy bằng Yarn
CMD ["yarn", "start"]