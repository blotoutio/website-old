const getJobTitle = (title) => {
  return title.replace('Blotout - Jobs | ', '')
}

const Job = (props) => {
  return (
    <div id='jobs' className='writing'>
      <div id='jobs-item-header' className='writing-item-header'>
        <div
          id='jobs-item-header-content'
          className='writing-item-header-content'
        >
          <h1 id='jobs-item-title' className='writing-item-title'>
            {getJobTitle(props.title)}
          </h1>
        </div>
      </div>

      <div id='jobs-item-text' className='writing-item-text'>
        <div id='jobs-item-text-content' className='writing-item-text-content'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Job
