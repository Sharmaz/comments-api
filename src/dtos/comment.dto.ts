export interface CommentDto {
  id: string;
  mail: string;
  message: string;
  createdAt: Date;
}

export type CreateCommentDto = Omit<CommentDto, 'id' | 'createdAt'>;

export type UpdateCommentDto = Pick<CommentDto, 'mail' | 'message'>;
