module.exports = (res, { data, ...props } = {}) => {
    res.status(200).json({ ok: true, data, ...props }); /* data: Es una propiedad que trae determinado valor */
    /* props: desestrutura las propiedades del objeto, como por ejempol(...dataValues) */
  };
  