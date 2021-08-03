const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader = ('Content-Type', 'text/plain')
        next();
    })

.get((req, res, next) => {
    res.end('will send all the leader to you!');
})

.post((req, res, next) => {
    res.end('will add the leader:' + req.body.name + 'with details:' + req.body.description);

})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('put operation not supported');

})


.delete((req, res, next) => {
    res.end('Deleting all leaders');
});


leaderRouter.route("/:leaderId")
    .get((req, res, next) => {
        res.end('will send you   ' + req.params.leaderId);
    })

.post((req, res, next) => {
    res.end('will add the leader:' + req.body.name + 'with details:' + req.body.description);
    res.statusCode = 403;
    res.end('POST operation not supported on /leaderss/' + req.params.leaderId);

})

.put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name +
        ' with details: ' + req.body.description);

})


.delete((req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderId);
});






module.exports = leaderRouter;