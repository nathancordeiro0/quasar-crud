import useApi from 'src/composables/UseApi'

export default function postsServer () {
  const { list, post, update, remove, getById } = useApi('posts')
  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
