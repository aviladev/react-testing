import React, { Component } from 'react'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = ({ target: {value} }) =>
    this.setState({ comment: value })
  
  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({ comment: '' })
  }

  render () {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="comment-box"
      >
        <textarea
          onChange={this.handleChange}
          value={this.state.comment} 
        />
        <button>Submit Comment</button>
      </form>
    )
  }
}

export default CommentBox