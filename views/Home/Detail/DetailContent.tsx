import Image from 'next/image';
import type { Store } from 'types/store';
import Naver from 'public/images/naver.png';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import styled from 'styled-components';

type Props = {
  currentStore?: Store;
};

const DetailContent = ({ currentStore }: Props) => {
  if (!currentStore) return null;

  return (
    <Styled>
      <div className="detail_content">
        <div className="images">
          {currentStore.images.slice(0, 3).map((image) => (
            <div
              style={{ position: 'relative', maxWidth: 120, height: 80 }}
              key={image}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="120px"
                style={{ objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
              />
            </div>
          ))}
        </div>
      </div>
    </Styled>
  );
};
export default DetailContent;

const Styled = styled.div`
  .detail_content {
    height: 100%;
    overflow: hidden;

    &.expanded {
      // overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    > .images {
      display: grid;
      grid-template-columns: repeat(3, minmax(auto, 120px));
      justify-content: center;
      gap: 12px;
      margin-bottom: 16px;
      padding: 0 20px;
    }

    > .line {
      width: 100%;
      height: 10px;
      margin: 20px 0;
      background: #e9ecef;
      border: 1px solid #e2e5e8;
    }

    > .description {
      padding: 0 20px;

      > p {
        font-size: 0.875rem;
        color: #666;
      }
    }

    > .basic_info {
      padding: 0 20px;

      > div {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ecf0f2;

        &:last-of-type {
          border-bottom: none;
          padding-bottom: 0;
        }

        &.address {
          > span {
            margin-left: 8px;
            font-size: 0.875rem;
            color: #424242;
          }
        }

        &.phone {
          > span {
            margin-left: 10px;
            font-size: 0.875rem;
            color: #424242;
          }
        }

        &.naver_url {
          > a {
            margin-left: 10px;
            font-size: 0.875rem;
            color: #64c0a9;
          }
        }
      }
    }

    > .menus {
      > .menus_title {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0px 20px 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid;
        border-bottom-color: #ecf0f2;

        > h2 {
          font-size: 1.125rem;
        }

        > span {
          font-weight: 700;
          color: #f88a25;
        }
      }

      > .menu_list {
        padding: 0 20px;
        margin-bottom: 20px;

        > .menu {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;

          > .name {
            max-width: 70%;
            word-break: keep-all;
            color: #0068c3;
          }

          > .price {
            color: #f88a25;
          }
        }
      }
    }
  }
`;
