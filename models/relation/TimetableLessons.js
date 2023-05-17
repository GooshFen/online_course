const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const Timetable = require('../Timetable');
const Lesson = require('../Lesson');

/**
 * Define a model that can be managed by Sequelize.
 */
const TimetableLessons = sequelize.define("timetable_lesson", {
    timetableId: {
        type: Sequelize.INTEGER,
        references: {
            model: Timetable,
            key: "id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        // unique: 'unique-timetable-per-lesson',
    },
    
    lessonId: {
        type: Sequelize.INTEGER,
        references: {
            model: Lesson,
            key: "id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
        // unique: 'unique-timetable-per-lesson'
    }
    });

module.exports = TimetableLessons;