import React from 'react';
import  CommentBox from './CommentBox';
const Comments = React.createClass({
	renderComment(comment, i) {
		return (
			<div className="comment" key={i}>
				<button class="show-commentbox">Show</button>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-commnet"
					onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
				</p>
			</div>
		);
	},
	handleSubmit(e) {
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	},
	render() {
		// test
		console.log('comment render:-', this.props);
		const { isShowing, showCommentBox } = this.props;
		return (
			<div className="comments">
				<CommentBox isShowing={isShowing} />
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form" onSubmit={
					this.handleSubmit}>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment here" />
					<input type="submit" hidden />
				</form>
				<button onClick= {() => showCommentBox(true)}>Comment Box</button>
			</div>	
			)
	}
});

export default Comments;