function htmlRespones(page_title) {
    return function(req, res, next){
        res.locals.html = true;
        res.locals.title = `${page_title} - ${process.env.Application_name}`
        next();
    };
}

module.exports = htmlRespones;