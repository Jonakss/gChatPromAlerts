const path = require("path");

const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logsPath = process.env.LOG_FILE || path.join(__dirname, process.env.ENVARIOMENT=="production"?"/../logs/":"/../../logs/");

const logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
     info => `${info.timestamp} ${info.level}: ${info.message}`,
   ),
);

const transports = [
    new DailyRotateFile({
        filename: path.join(logsPath, "gChatPromAlerts-%DATE%.log"),
        datePattern: "YYYY-MM-DD-HH",
        zippedArchive: true,
        maxSize: "20m",
        maxFiles: "7d",
        prepend: true,
        level: process.env.LOG_LEVEL,
    }),
    new winston.transports.Console({ format: winston.format.simple()}),
];

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
    format: logFormat,
    transports: transports,
});

module.exports = logger;