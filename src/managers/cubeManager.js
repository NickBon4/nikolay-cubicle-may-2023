const Cube = require('../models/Cube')

//TODO: use mongoose to filter in db
exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean()

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
};

exports.getOne = (cubeId) => Cube.findById(cubeId).lean()
// exports.getOneLean = (cubeId) => this.getOne(cubeId).lean()

exports.create = async (cubeData) => {
    const cube = new Cube(cubeData)

    await cube.save()

    return cube

};