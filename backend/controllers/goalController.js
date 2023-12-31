const asyncHandler = require('express-async-handler')

// @DESC --> get goals
// @ROUTE --> GET /api/goals
// @ACCESS --> Private 

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get goals'})
})

// @DESC --> get goal
// @ROUTE --> POST /api/goals
// @ACCESS --> Private 

const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }

    res.status(200).json({message: 'set goals'})
})

// @DESC --> update a goal
// @ROUTE --> PUT /api/goals/:id
// @ACCESS --> Private 

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
})

// @DESC --> delete a goal
// @ROUTE --> DELETE /api/goals/:id
// @ACCESS --> Private 

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    deleteGoal,
    updateGoal
}