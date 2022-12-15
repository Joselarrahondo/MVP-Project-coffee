DROP TABLE IF EXISTS coffee;
CREATE TABLE coffee (
    id SERIAL,
    name TEXT,
    caffein TEXT,
    flavor TEXT
);


INSERT INTO coffee (name, caffein, flavor) VALUES ('Bustelo', 'high', 'Bold');
INSERT INTO coffee (name, caffein, flavor) VALUES ('Foldgers', 'medium', 'Mild');
INSERT INTO coffee (name, caffein, flavor) VALUES ('Maxwell House', 'medium', 'rich');
INSERT INTO coffee (name, caffein, flavor) VALUES ('Death Wish', 'high', 'Bold');
INSERT INTO coffee (name, caffein, flavor) VALUES ('CAFE-OLE', 'medium', 'Mild');
