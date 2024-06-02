[My Github URL](https://github.com/A-iong/1122-js-demo-34)

[My Vercel Homepage](https://1122-js-demo-34.vercel.app/index_34.html)

## API Project 簡要說明

### 參考上課做的練習修改而成

### 搜尋車款功能

### 重點 3

### 重點 4

### 重點 5

---

## API 資料及網路資源來源說明

### 網路資源來源 1

### 網路資源來源 2

### 網路資源來源 3

---

## 後端 Supabase 資料庫設計

### SQL schema and data

#### => table 1
```SQL
CREATE TABLE cart_name_34 (
  id serial NOT NULL PRIMARY KEY,
  created_at timestamp NOT NULL DEFAULT NOW(),
  name varchar(255),
  email text,
  phone varchar(255)
);

ALTER TABLE cart_name_34 ENABLE ROW LEVEL SECURITY;
create policy "Allow SELECT access for all users" on "public"."cart_name_34" as PERMISSIVE for SELECT to public using (true);
create policy "Allow INSERT access for all users" on "public"."cart_name_34" as PERMISSIVE for INSERT to public with check (true);
create policy "Allow UPDATE access for all users" on "public"."cart_name_34" as PERMISSIVE for UPDATE to public using (true) with check (true);
create policy "Allow DELETE access for all users" on "public"."cart_name_34" as PERMISSIVE for DELETE to public using (true);

INSERT INTO cart_name_34 (name, email, phone)
values
('BMW', 'bmw@gmail.com', '0978513245'),
('Porsche', 'porsche@gmail.com', '079244215'),
('Mercedes-Banz', 'mercedes@gmail.com', '031989235'),
('AUDI', 'audi@gmail.com', '062528823');

DROP TABLE cart_name_34;
TRUNCATE TABLE cart_name_34;
```

#### => table 2
```SQL
CREATE TABLE cart_products_34 (
    id serial NOT NULL PRIMARY KEY,
    created_at timestamp NOT NULL DEFAULT NOW(),
    title varchar(255),
    price real,
    "cartId" int4,
    "localImg" text,
    "remoteImg" text,
    CONSTRAINT fk_1 FOREIGN KEY ("cartId") REFERENCES cart_name_34(id) on DELETE SET NULL on UPDATE CASCADE
);

ALTER TABLE cart_products_34 ENABLE ROW LEVEL SECURITY;
create policy "Allow SELECT access for all users" on "public"."cart_products_34" as PERMISSIVE for SELECT to public using (true);
create policy "Allow INSERT access for all users" on "public"."cart_products_34" as PERMISSIVE for INSERT to public with check (true);
create policy "Allow UPDATE access for all users" on "public"."cart_products_34" as PERMISSIVE for UPDATE to public using (true) with check (true);
create policy "Allow DELETE access for all users" on "public"."cart_products_34" as PERMISSIVE for DELETE to public using (true);

INSERT INTO cart_products_34 (title, price,  "cartId", "localImg", "remoteImg")
VALUES
('BMW 330i Touring', 2000000, 1, './images/330.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/330.jpg'),
('BMW 530i GT', 2050000, 1, './images/530.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/530.jpg'),
('Porsche-718 S', 4000000, 2, './images/718_001.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/718_001.jpg'),
('Porsche-911 TUBRO', 6000000, 3, './images/911_001.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/911_001.jpg'),
('Mercedes-Banz GLA', 1900000, 3, './images/GLA.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/GLA.jpg'),
('Mercedes-Banz GLC', 1900000, 3, './images/GLC.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/GLC.jpg'),
('AUDI S3', 1500000, 4, './images/S3.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/S3.jpg'),
('AUDI S8', 3000000, 4, './images/S8.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/S8.jpg');
```

#### => table 3

#### => 提供執行一次就可重新建立 schema 及 data 之 SQL 指令
```SQL
----------------
--cart_name_34 table
----------------
CREATE TABLE cart_name_34 (
  id serial NOT NULL PRIMARY KEY,
  created_at timestamp NOT NULL DEFAULT NOW(),
  name varchar(255),
  email text,
  phone varchar(255)
);

ALTER TABLE cart_name_34 ENABLE ROW LEVEL SECURITY;
create policy "Allow SELECT access for all users" on "public"."cart_name_34" as PERMISSIVE for SELECT to public using (true);
create policy "Allow INSERT access for all users" on "public"."cart_name_34" as PERMISSIVE for INSERT to public with check (true);
create policy "Allow UPDATE access for all users" on "public"."cart_name_34" as PERMISSIVE for UPDATE to public using (true) with check (true);
create policy "Allow DELETE access for all users" on "public"."cart_name_34" as PERMISSIVE for DELETE to public using (true);

INSERT INTO cart_name_34 (name, email, phone)
values
('BMW', 'bmw@gmail.com', '0978513245'),
('Porsche', 'porsche@gmail.com', '079244215'),
('Mercedes-Banz', 'mercedes@gmail.com', '031989235'),
('AUDI', 'audi@gmail.com', '062528823');

DROP TABLE cart_name_34;
TRUNCATE TABLE cart_name_34;



-------------------
-- cart_products_34 table
-------------------
CREATE TABLE cart_products_34 (
    id serial NOT NULL PRIMARY KEY,
    created_at timestamp NOT NULL DEFAULT NOW(),
    title varchar(255),
    price real,
    "cartId" int4,
    "localImg" text,
    "remoteImg" text,
    CONSTRAINT fk_1 FOREIGN KEY ("cartId") REFERENCES cart_name_34(id) on DELETE SET NULL on UPDATE CASCADE
);

ALTER TABLE cart_products_34 ENABLE ROW LEVEL SECURITY;
create policy "Allow SELECT access for all users" on "public"."cart_products_34" as PERMISSIVE for SELECT to public using (true);
create policy "Allow INSERT access for all users" on "public"."cart_products_34" as PERMISSIVE for INSERT to public with check (true);
create policy "Allow UPDATE access for all users" on "public"."cart_products_34" as PERMISSIVE for UPDATE to public using (true) with check (true);
create policy "Allow DELETE access for all users" on "public"."cart_products_34" as PERMISSIVE for DELETE to public using (true);

INSERT INTO cart_products_34 (title, price,  "cartId", "localImg", "remoteImg")
VALUES
('BMW 330i Touring', 2000000, 1, './images/330.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/330.jpg'),
('BMW 530i GT', 2050000, 1, './images/530.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/530.jpg'),
('Porsche-718 S', 4000000, 2, './images/718_001.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/718_001.jpg'),
('Porsche-911 TUBRO', 6000000, 3, './images/911_001.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/911_001.jpg'),
('Mercedes-Banz GLA', 1900000, 3, './images/GLA.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/GLA.jpg'),
('Mercedes-Banz GLC', 1900000, 3, './images/GLC.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/GLC.jpg'),
('AUDI S3', 1500000, 4, './images/S3.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/S3.jpg'),
('AUDI S8', 3000000, 4, './images/S8.jpg', 'https://wkuwjlgjzkovodskzcca.supabase.co/storage/v1/object/public/demo-34/113-js-final-exam/S8.jpg');




---------------------------------
-- Drop tables product_34 ,company_34
----------------------------------
DROP TABLE cart_name_34,cart_products_34;
```

---

### 前端程式設計說明

#### => 功能 1

#### => 功能 2

#### => 功能 3

#### => 功能 4

#### => 功能 5

---

### 解決問題說明

#### => 問題 1

#### => 問題 2

#### => 問題 3

#### => 問題 4

#### => 問題 5

---

### 學習甘苦談

#### => 1.

#### => 2.

#### => 3.

#### => 4.

#### => 5.
