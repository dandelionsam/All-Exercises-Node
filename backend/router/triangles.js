const express = require("express");

const router = express.Router();

checkSegments = (...segments) => {

    if(segments[0] <= segments[1] - segments[2]) { return {}}
    if(segments[0] >= segments[1] + segments[2]) { return {}}
    return null;
}

isTriangle = (segments) => {
    if (segments.length === 3) {
        const a = segments[0];
        const b = segments[1];
        const c = segments[2];
        return  checkSegments(a, b, c) === null 
                && checkSegments(b, a, c) === null
                && checkSegments(c, a, b) === null
                ? "this is a triangle!"
                : false;
    } else {
        return false
    }
};

typeofTriangle = (segments) => {
    return segments[0] === segments[1] && segments[1] === segments[2] ? 'Equilateral' :
           segments[0] !== segments[1] && segments[1] !== segments[2]  && segments[0] !== segments[2] ? 'Scalene' :
           'Isosceles';
};

router.use("", (req, res, next) => {
    segments = [];

    for (const key in req.query) {
        if(req.query[key] !== undefined) {
            segments.push(parseFloat(req.query[key]));
        }  
    }

    if (isTriangle(segments) !== false) {
        res.json({
            message: isTriangle(segments),
            type: typeofTriangle(segments)
        });
    } else {
        res.json({
            message: "This is not a triangle!"
        });
    }
    
});



module.exports = router;
