import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const RocketFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.6406 1.63618C21.0242 1.37089 22.2338 2.6092 21.9614 4.01205L21.7842 4.92459C21.2178 7.84135 19.8245 10.5115 17.7944 12.6166L17.8319 16.14C17.844 17.2783 17.2177 18.3247 16.2171 18.8379L14.3018 19.8201C13.0703 20.4517 11.5678 19.9547 10.9388 18.7077L9.87101 16.5908 7.19422 13.8724 5.11028 12.7884C3.88241 12.1496 3.39301 10.6238 4.0149 9.37316L4.98211 7.42815C5.48745 6.41192 6.51781 5.77589 7.63879 5.7882L11.1206 5.82643C13.2143 3.76516 15.8669 2.35977 18.7592 1.80518L19.6406 1.63618ZM6.69875 11.2462 9.32317 7.91478 7.61635 7.89604C7.28665 7.89242 6.9836 8.07948 6.83497 8.37838L5.86776 10.3234C5.8447 10.3698 5.8305 10.4183 5.82453 10.4671 5.80274 10.6451 5.89046 10.8258 6.05662 10.9122L6.69875 11.2462ZM12.4575 17.0949 12.7863 17.7467C12.8714 17.9154 13.0493 18.0045 13.2246 17.9824 13.2726 17.9763 13.3204 17.9619 13.3661 17.9385L15.2814 16.9563C15.5757 16.8053 15.7599 16.4976 15.7563 16.1627L15.7379 14.4299 12.4575 17.0949ZM8.40015 18.3503C8.40015 16.5555 6.96743 15.1006 5.20008 15.1006 3.43272 15.1006 2 16.5555 2 18.3503V21.6001H5.20008C6.96743 21.6001 8.40015 20.1451 8.40015 18.3503ZM5.20008 17.2085C5.82104 17.2085 6.32443 17.7197 6.32443 18.3503 6.32443 18.9809 5.82104 19.4921 5.20008 19.4921H4.07572V18.3503C4.07572 17.7197 4.57911 17.2085 5.20008 17.2085Z"/>',
      }}
    />
  )
)

RocketFill.displayName = 'RocketFill'

export const tags = ['RocketFill', '']
