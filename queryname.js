app.get('/api/product', (req, res) => {
    const Prod = data.map((pr) => {
        const {id, name, priceProduct} = pr;
        return {id,name,priceProduct}
    })
    res.json(Prod)
})
app.get('/api/product/:Something', (req, res) => {
    const {Something} = req.params;
    const single = data.find(pro => pro.id === Number(Something))
    if(!single){
        return res.status(404).send('ID Tidak Ditemukan : <a href="/" >Back To Home</a>')
    }
    res.json(single)
})
app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;
    let sortedProducts = [...data];
    if(search){
        sortedProducts = sortedProducts.filter(product => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
       return res.status(200).json({success : true, data : [sortedProducts]})
    }
    res.status(200).json(sortedProducts)
})
