import { useEffect, useRef, useState } from 'react'

import { Button, Skeleton } from 'antd'

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

  const [avatarUrl, setAvatarUrl] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }

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
        <img
          src={avatarUrl}
          alt="Avatar"
          className="avatar image"
          style={{ height: size, width: size }}
        />
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
