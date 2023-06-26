import ProductCard from "./ProductCard"

const ListStartup = ({ searchResults }) => {

    const results = searchResults.map(post => <ProductCard key={post.id} post={post} />)

    const content = results?.length ? results : <article><p>No Matching Startups</p></article>

    return (
        
        <div className="product-list pb-5">
                {/* LISTE PRODUITS DIV */}
                {/* {filteredProducts.map((product) => ( */}
                {content}
                {/* ))} */}
              </div>
    )
}
export default ListStartup
