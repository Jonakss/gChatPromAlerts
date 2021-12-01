CREATE DATABASE gchatpromalerts IF NOT EXISTS;

CREATE TABLE spaces(
    spaceID VARCHAR(15),
    type NOT NULL,
    enabled NOT NULL,
    name VARCHAR(15) NOT NULL,
    created,
    updated
    CONSTRAINT spaces_pk PRIMARY KEY (spaceID)
);

CREATE TABLE threads(
    threadID VARCHAR(15),
    spaceID
    CONSTRAINT threads_pk PRIMARY KEY (threadID),
    CONSTRAINT space_fk FOREIGN KEY (spaceID)
);

CREATE TABLE fingerprints(
    fingerprintID,
    threadID
    CONSTRAINT fingerprints_pk PRIMARY KEY (fingerprintID),
    CONSTRAINT threads_fk FOREIGN KEY (threadID)
);