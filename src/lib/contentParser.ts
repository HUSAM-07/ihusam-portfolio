type ContentItem = {
    type: 'text' | 'image';
    content?: string;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  
  export function parseContent(content: string): ContentItem[] {
    // Implement your parsing logic here
    // This is a basic example; adjust according to your content structure
    return [{ type: 'text', content: content }];
  }