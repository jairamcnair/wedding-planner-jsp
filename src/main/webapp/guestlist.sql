
DROP DATABASE IF EXISTS WeddingPlanner;

CREATE DATABASE WeddingPlanner;

USE WeddingPlanner;



CREATE TABLE Guests (
    guestId int not null,
    Name varchar(255),
    Email varchar(255),
    Address varchar(255),
    NeedHotel varchar(255,
    Kings varchar(255),
    Queens varchar(255),
    NumberOfPeopleInvited varchar(255),
    InviteSent varchar(255),
    RSVPReceived varchar(255),
    NumberOfPeopleComing varchar(255)
    CONSTRAINT guests_pk PRIMARY KEY (guestId)
);