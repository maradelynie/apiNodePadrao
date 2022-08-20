const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const	morgan	=	require('morgan');
const	logger	=	require('./logger');

const corsUrl = process.env.CORSURL;


module.exports = app => {
	app.set('port', 3000);
	app.set('json	spaces', 2);
	app.use(morgan('common', {
		stream: {
			write: (log) => logger.info(log)
		}
	}));
	app.use(cors({
		origin: corsUrl,
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type', 'Authorization']
	}))
	app.use(bodyParser.json());
	app.use(app.auth.initialize());
	app.use((req, res, next) => {
		delete req.body.id;
		next();
	});
	app.use(express.static('public'));
};
