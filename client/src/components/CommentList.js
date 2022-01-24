import React from 'react';

const CommentList = ({ comments }) => {
	return (
		<ul>
			{comments.map((comment, i) => {
				let content;
				if (comment.status === 'approved') {
					content = comment.content;
				}
				if (comment.status === 'pending') {
					content = 'This comment is waiting moderation';
				}
				if (comment.status === 'rejected') {
					content = 'This comment has been rejected';
				}
				return <li key={i}>{content}</li>;
			})}
		</ul>
	);
};

export default CommentList;
