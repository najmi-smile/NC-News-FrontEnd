import React from 'react';
import PT from "prop-types";


const DeleteComment = (props) => (
  <section class="media-right">
    <button class="delete" onClick={() => props.deleteUserComment(props.index)}></button>
  </section>
)

DeleteComment.propTypes = {
  deleteUserComment: PT.func,
  index: PT.number
};

export default DeleteComment;