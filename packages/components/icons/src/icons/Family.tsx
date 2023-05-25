import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Family = React.forwardRef(
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
          '<path fill-rule="evenodd" d="M12.0434 1.80005C9.44463 1.80005 7.32599 3.89648 7.32599 6.49718C7.32599 8.22465 8.26075 9.72964 9.6501 10.5455C6.63767 10.7653 4.96369 13.3545 4.0964 15.396C3.61999 16.5175 3.31708 17.6258 3.13327 18.4452C3.04082 18.8573 2.97721 19.2023 2.93635 19.4469C2.91589 19.5694 2.90108 19.6671 2.89116 19.7359C2.8862 19.7703 2.88246 19.7976 2.87984 19.8171L2.87726 19.8368L2.55089 22.0776C2.45538 22.7334 2.90959 23.3425 3.56542 23.438C4.22124 23.5336 4.83032 23.0793 4.92584 22.4235L5.25363 20.1729L5.25695 20.1483L5.25708 20.1473L5.25865 20.1353C5.26023 20.1236 5.26285 20.1044 5.26662 20.0782C5.27416 20.0259 5.28624 19.946 5.30356 19.8423C5.33823 19.6347 5.39362 19.3336 5.47508 18.9705C5.63907 18.2394 5.90352 17.2803 6.30535 16.3344C7.15541 14.3334 8.36784 12.9305 10.0662 12.9305C10.6173 12.9305 11.1162 13.0756 11.5692 13.343C11.546 13.5186 11.5339 13.6978 11.5339 13.88C11.5339 15.6516 12.6695 17.1399 14.2411 17.7105C11.6759 18.384 10.4515 20.8084 9.94072 22.2186C9.71501 22.8417 10.0372 23.5298 10.6603 23.7556C11.2834 23.9813 11.9715 23.6591 12.1972 23.036C12.7507 21.5081 13.7839 19.9323 15.6653 19.9323C17.5466 19.9323 18.5798 21.5081 19.1333 23.036C19.359 23.6591 20.0471 23.9813 20.6702 23.7556C21.2933 23.5298 21.6155 22.8417 21.3898 22.2186C20.879 20.8084 19.6546 18.3839 17.0893 17.7104C18.6609 17.1398 19.7964 15.6515 19.7964 13.88C19.7964 11.6069 17.9267 9.80005 15.6651 9.80005C15.5723 9.80005 15.4801 9.80309 15.3887 9.80909C16.2362 8.96085 16.7609 7.79146 16.7609 6.49718C16.7609 3.89648 14.6423 1.80005 12.0434 1.80005ZM9.72599 6.49718C9.72599 5.23505 10.757 4.20005 12.0434 4.20005C13.3299 4.20005 14.3609 5.23505 14.3609 6.49718C14.3609 7.7593 13.3299 8.7943 12.0434 8.7943C10.757 8.7943 9.72599 7.7593 9.72599 6.49718ZM15.6651 12.2C14.689 12.2 13.9339 12.9721 13.9339 13.88C13.9339 14.788 14.689 15.56 15.6651 15.56C16.6413 15.56 17.3964 14.788 17.3964 13.88C17.3964 12.9721 16.6413 12.2 15.6651 12.2Z"/>',
      }}
    />
  )
)

Family.displayName = 'Family'

export const tags = ['Family', '']