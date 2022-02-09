CREATE DATABASE gchatpromalerts IF NOT EXISTS;

USE gchatpromalerts;

CREATE TABLE parameters IF NOT EXISTS(
    adminMail,
    
);

CREATE TABLE spaces IF NOT EXISTS(
    spaceID VARCHAR(15),
    type VARCHAR(5) NOT NULL,
    enabled BOOLEAN NOT NULL,
    name VARCHAR(15) NOT NULL,
    singleUserBotDm BOOLEAN NOT NULL,
    threaded BOOLEAN NOT NULL,
    addedBy, 
    created,
    updated
    CONSTRAINT spaces_pk PRIMARY KEY (spaceID)
);

CREATE TABLE threads IF NOT EXISTS(
    threadID VARCHAR(15),
    spaceID
    CONSTRAINT threads_pk PRIMARY KEY (threadID),
    CONSTRAINT threads_space_fk FOREIGN KEY (spaceID)
);

CREATE TABLE fingerprints IF NOT EXISTS(
    fingerprintID,
    threadID
    CONSTRAINT fingerprints_pk PRIMARY KEY (fingerprintID),
    CONSTRAINT fingerprints_threads_fk FOREIGN KEY (threadID)
);