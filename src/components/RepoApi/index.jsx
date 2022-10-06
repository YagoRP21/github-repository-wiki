
function ItemRepo({repo, handdleRemoveRepo}) {

    return (
        <div className="repo-container" onClick={() => handdleRemoveRepo(repo.id)} >
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <p>{repo.description}</p>
            <a className="show-repo" href={repo.html_url} target="_blank">Go to repository!</a>
            <a id={repo.id} className="remove" href='#'>Remove</a>
            <hr />
        </div>
    )
}

export default ItemRepo