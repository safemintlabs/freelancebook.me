import { useRef, useState } from 'react'

import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import { Button, Skeleton } from 'antd'
import { useQuery } from 'react-query'

import { useAuth } from '@redwoodjs/auth'

import './styles.less'

const Avatar = ({
  url,
  size,
  onUpload,
}: {
  url: string
  size: string | number
  onUpload?: (url: string) => void
}) => {
  const uploadRef = useRef<any>(null)
  const { client: supabase } = useAuth()

  const [uploading, setUploading] = useState(false)

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      return url
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }

  const { data: avatarUrl } = useQuery(['avatar', url], () =>
    downloadImage(url)
  )

  async function uploadAvatar(event) {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      console.log({ filePath, fileName, file })
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert('ERROR UPLOADING: ' + error.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="avatar">
      {avatarUrl ? (
        <ChakraAvatar size="xl" name="Segun Adebayo" src={avatarUrl} />
      ) : (
        <Skeleton.Image />
      )}
      {onUpload && (
        <div style={{ width: size }} className="upload-toolbar">
          <Button
            className="button primary block"
            onClick={() => {
              uploadRef.current.click()
            }}
            size="small"
          >
            {uploading ? 'Uploading ...' : 'Upload'}
          </Button>
          <input
            ref={uploadRef}
            style={{
              visibility: 'hidden',
              position: 'absolute',
              display: 'none',
            }}
            type="file"
            accept="image/*"
            onChange={uploadAvatar}
            disabled={uploading}
          />
        </div>
      )}
    </div>
  )
}

export default Avatar
