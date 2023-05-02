import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const TypingFill = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M17.8996 2.80005H6.01674C3.841 2.80005 2 4.62578 2 6.78345C2 9.43905 2 13.0905 2 15.7461C2 17.9868 3.841 19.7295 6.10042 19.7295H16.9791L20.8285 22.6341C20.9958 22.7171 21.0795 22.8 21.2469 22.8C21.3305 22.8 21.4979 22.8 21.5816 22.7171C21.8326 22.6341 22 22.3851 22 22.0532V6.86644C22 4.62577 20.159 2.80005 17.8996 2.80005ZM13.5481 11.0158C13.5481 11.7627 12.8787 12.4266 12.1255 12.4266C11.3724 12.4266 10.7029 11.7627 10.7029 11.0158C10.7029 10.2689 11.3724 9.60503 12.1255 9.60503C12.8787 9.60503 13.5481 10.1859 13.5481 11.0158ZM8.86192 11.0158C8.86192 11.7627 8.19247 12.4266 7.43933 12.4266C6.68619 12.4266 6.01674 11.7627 6.01674 11.0158C6.01674 10.2689 6.68619 9.60503 7.43933 9.60503C8.19247 9.60503 8.86192 10.1859 8.86192 11.0158ZM16.728 9.60503C17.4812 9.60503 18.1506 10.2689 18.1506 11.0158C18.1506 11.7627 17.4812 12.4266 16.728 12.4266C15.9749 12.4266 15.3054 11.7627 15.3054 11.0158C15.3054 10.2689 15.9749 9.60503 16.728 9.60503Z"/>',
      }}
    />
  )
)

TypingFill.displayName = 'TypingFill'

export const tags = ['typing-fill', 'contact']
