import Tags from './Tags'

function TagsRender ({ response, loading }) {
  if (response.length === 0) {
    return null
  }
  const { tags } = response.data[0]
  return loading ? <span>cargando</span> : <Tags data={tags} />
}

export default TagsRender
