import { ImageConfig } from '@/packages/components/Informations/Mores/Image/index'
import { ChartFrameEnum, PackagesCategoryEnum } from '@/packages/index.d'
import { ChatCategoryEnum, ChatCategoryEnumName } from '../index.d'

// 远程共享库（调接口获取图像列表）
const imageList = [
    { imageName: 'bottle1', imageUrl: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg' },
    { imageName: 'bottle1', imageUrl: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg' }
  ]

  const bottleConfigList = imageList.map(i=>({
    ...ImageConfig,
    category: ChatCategoryEnum.BOTTLE,
    categoryName: ChatCategoryEnumName.BOTTLE,
    package: PackagesCategoryEnum.PHOTOS,
    chartFrame: ChartFrameEnum.STATIC,
    image: i.imageUrl,
    dataset: i.imageUrl,
    title: i.imageName,
  }))



export default [...bottleConfigList]
