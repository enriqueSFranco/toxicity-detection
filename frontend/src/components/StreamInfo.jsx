import TagsRender from './TagsRender'
import StreamHeader from './StreamHeader'

function StreamInfo ({ response, loading }) {
  return (
    <>
      <StreamHeader response={response} loading={loading} />
      <TagsRender response={response} loading={loading} />
    </>
  )
}

export default StreamInfo
