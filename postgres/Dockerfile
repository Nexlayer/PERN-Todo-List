FROM postgres:17-alpine

# Add todo table to db created from POSTGRES_DB env var
COPY CreateDB.sql /docker-entrypoint-initdb.d/CreateDB.sql
RUN chmod 644 /docker-entrypoint-initdb.d/CreateDB.sql