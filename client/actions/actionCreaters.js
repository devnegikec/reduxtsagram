// increment 
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment 

export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}

}
// remove comment

export function removeComment(postId, i){
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}

export function showCommentBox(isShown){
	console.log('SHOW_MODAL', isShown);
	return {
		type: 'SHOW_MODAL',
		isShown
	}
}

export function hideCommentBox(isHidden){
	return {
		type: 'HIDE_MODAL',
		isHidden
	}
}