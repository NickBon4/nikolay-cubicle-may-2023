const uniqid = require('uniqid')
const cubes = []

exports.getAll = () => db.cubes.slice()

exports.create = (cubeData) => {
    const newCube ={
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube)

    return newCube
}