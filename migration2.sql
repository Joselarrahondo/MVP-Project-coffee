DROP TABLE IF EXISTS coffee;
CREATE TABLE coffee (
    id SERIAL,
    name TEXT,
    caffein TEXT,
    flavor TEXT
);


INSERT INTO coffee (name, caffein, flavor) VALUES ('Bustelo', 'high', 'bold');
INSERT INTO coffee (name, caffein, flavor) VALUES ('Foldgers', 'medium', 'mild');
INSERT INTO coffee (name, caffein, flavor) VALUES ('Maxwell House', 'medium', 'rich');
INSERT INTO coffee (name, caffein, flavor) VALUES ('Death Wish', 'high', 'bold');
INSERT INTO coffee (name, caffein, flavor) VALUES ('CAFE-OLE', 'medium', 'mild');
