const isDistanceValid = distance => Number.isFinite(distance) && distance >= 0;

const isCoordinateValid = coordinate => typeof coordinate === 'number' && Number.isFinite(coordinate);

const isPositionValid = position => !!(
    position &&
    isCoordinateValid(position.lat) &&
    isCoordinateValid(position.lng)
);

export {
    isPositionValid,
    isCoordinateValid,
    isDistanceValid
};
