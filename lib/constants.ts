export const FILE_CONSTRAINTS = {
  ALLOWED_EXTENSIONS: [".epub", ".mobi", ".pdf", ".djvu", ".pub"],
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  MIME_TYPES: {
    'application/pdf': ['.pdf'],
    'application/epub+zip': ['.epub'],
    'application/x-mobipocket-ebook': ['.mobi'],
    'image/vnd.djvu': ['.djvu'],
    'application/x-mspublisher': ['.pub']
  }
} as const;

export const API_ENDPOINTS = {
  SEND_EMAIL: 'https://api.pdf2kindle.pro/send-email'
} as const;