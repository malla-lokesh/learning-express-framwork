exports.getContactUs = (req, res, next) => {
    res.render('contact-us', {
        pageTitle: 'Contact Us',
        path: '/contact-us',
        formCSS: true,
    });
}

exports.getSuccessMsg = (req, res, next) => {
    console.log(req.body);
    res.status(404).render('success', {
        pageTitle: 'Contact Us',
        path: '/contact-us'
    });
}