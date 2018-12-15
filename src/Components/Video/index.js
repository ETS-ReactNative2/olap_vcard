import { connect } from 'react-redux'
import { selectTrack } from 'redux/actions'
import Video from './Video'

const mapStateToProps = state => {
  const playlist = [
    {
      src: `https:${state.content.data.cFilm.video.fields.file.url}`,
      label: state.content.data.cFilm.video.fields.title,
    },
  ].concat(
    state.content.data.cFilm.videoList.map(video => ({
      src: video.fields.url,
      label: video.fields.title,
    }))
  )
  return {
    playlist,
  }
}

const mapDispatchToProps = dispatch => ({
  selectTrack: title => () => dispatch(selectTrack(title)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video)