import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Age = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2283 4.20924C12.7823 4.46561 13.1435 5.00346 13.1646 5.60305C13.1959 6.1394 12.8711 6.61597 12.3899 6.81035L12.3889 7.94995H16.3077C16.4839 7.94995 16.6305 8.08261 16.6609 8.25754L16.6667 8.32495V12.45H18.5882C18.7904 12.45 18.9585 12.5826 18.9934 12.7575L19 12.825V18.825C19 19.0321 18.8156 19.2 18.5882 19.2H5.41176C5.18435 19.2 5 19.0321 5 18.825V12.825C5 12.6178 5.18435 12.45 5.41176 12.45H7.33333V8.32495C7.33333 8.14086 7.46032 7.98774 7.62778 7.95599L7.69231 7.94995H11.6111L11.6108 6.81066C11.1292 6.61649 10.8041 6.13969 10.8354 5.60305C10.8149 5.29417 11.0083 5.01015 11.3073 4.90987C11.4745 4.84671 11.5995 4.70756 11.6423 4.5372C11.7279 4.30101 11.977 4.16161 12.2283 4.20924ZM14.3722 16.2C14.042 16.7516 13.5261 17.1777 12.91 17.4075C12.5697 17.5322 12.2085 17.5958 11.8444 17.595C11.4401 17.5926 11.0405 17.511 10.67 17.355C10.108 17.1169 9.63941 16.7123 9.33222 16.2C9.00361 16.7483 8.49039 17.1717 7.87778 17.4C7.19629 17.6551 6.44743 17.6513 5.77797 17.4023L5.77778 18.45H18.2222L18.2233 17.2839C18.1371 17.327 18.0485 17.3658 17.9578 17.4C16.6191 17.9004 15.1016 17.3925 14.3722 16.2ZM18.2222 13.2H5.77778V16.569L5.81809 16.5925C6.36214 16.8821 7.01482 16.9246 7.59778 16.7025C8.354 16.4161 8.8778 15.7427 8.95111 14.9625C8.96554 14.7925 9.09828 14.6575 9.2673 14.6301L9.33222 14.625C9.53411 14.6203 9.70468 14.7684 9.72111 14.9625C9.73747 15.1543 9.77929 15.3434 9.84556 15.525C10.2134 16.4377 11.1942 16.9771 12.1962 16.8175C13.1981 16.658 13.9471 15.8433 13.9911 14.865C13.9985 14.6861 14.135 14.5406 14.3119 14.5106L14.38 14.505C14.5888 14.5048 14.7605 14.6637 14.7689 14.865C14.7738 15.0906 14.8185 15.3138 14.9011 15.525C15.3314 16.5888 16.5738 17.1156 17.6778 16.7025C17.8742 16.6242 18.058 16.5196 18.2239 16.3919L18.2222 13.2ZM15.8889 8.69995H8.11111V12.45H15.8889V8.69995ZM12.2055 5.10366C12.0708 5.31722 11.8712 5.48405 11.6346 5.58069H11.5585C11.5966 5.86392 11.7793 6.11734 12 6.11734C12.2207 6.11734 12.4034 5.86392 12.4034 5.56578C12.3756 5.39861 12.3078 5.24025 12.2055 5.10366Z"/>',
      }}
    />
  )
)

Age.displayName = 'Age'

export const tags = ['age', 'criteria', 'animals']
