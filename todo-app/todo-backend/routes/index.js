const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get("/statistics", async (req, res) => {
  const number_of_todos = await redis.get("added_todos")
  if (number_of_todos != null) {
      const stats = {
      "added_todos": parseInt(number_of_todos)
    }
    res.send(stats)
  } else {
    const stats = {
      "added_todos": 0
    }
    res.send(stats)
    await redis.set("added_todos", 0)
  }
})
module.exports = router;
