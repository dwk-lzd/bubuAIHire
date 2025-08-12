# React 中引入 Assets 圖片的方法

## 概述

在 React 項目中，有多種方式可以引入和使用 assets 目錄中的圖片。本文檔將介紹各種方法及其適用場景。

## 目錄結構

```
src/
├── assets/
│   ├── swiper/
│   │   ├── swiper1.png
│   │   ├── swiper2.png
│   │   └── ...
│   └── other-images/
└── components/
```

## 方法一：直接 import 引入（推薦）

這是最常用且最推薦的方法，適用於靜態圖片。

```jsx
import swiper1 from '@/assets/swiper/swiper1.png'
import swiper2 from '@/assets/swiper/swiper2.png'

const MyComponent = () => {
    return (
        <div>
            <img src={swiper1} alt="swiper1" />
            <img src={swiper2} alt="swiper2" />
        </div>
    )
}
```

**優點：**
- 簡單直接
- 構建工具會自動優化
- 支持 Tree Shaking
- 類型安全（使用 TypeScript 時）

**缺點：**
- 需要手動引入每個圖片
- 不適合動態加載

## 方法二：動態引入

適用於需要根據條件動態加載圖片的場景。

```jsx
const getImageUrl = (imageName) => {
    return new URL(`../assets/swiper/${imageName}.png`, import.meta.url).href
}

const MyComponent = () => {
    const imageSrc = getImageUrl('swiper1')
    return <img src={imageSrc} alt="dynamic image" />
}
```

**優點：**
- 支持動態加載
- 代碼更靈活

**缺點：**
- 路徑需要正確配置
- 可能出現運行時錯誤

## 方法三：使用 Vite 的 glob 導入

適用於需要批量導入圖片的場景。

```jsx
const images = import.meta.glob('@/assets/swiper/*.png', { eager: true })

const MyComponent = () => {
    return (
        <div>
            {Object.values(images).map((image, index) => (
                <img key={index} src={image.default} alt={`image-${index}`} />
            ))}
        </div>
    )
}
```

**優點：**
- 批量導入
- 自動處理路徑

**缺點：**
- 僅適用於 Vite
- 需要了解 glob 語法

## 方法四：Async/Await 動態加載

適用於需要處理加載錯誤的場景。

```jsx
const loadImageAsync = async (imageName) => {
    try {
        const module = await import(`@/assets/swiper/${imageName}.png`)
        return module.default
    } catch (error) {
        console.error('圖片加載失敗:', error)
        return null
    }
}

const MyComponent = () => {
    const [imageSrc, setImageSrc] = useState(null)

    useEffect(() => {
        const loadImage = async () => {
            const src = await loadImageAsync('swiper1')
            setImageSrc(src)
        }
        loadImage()
    }, [])

    return imageSrc && <img src={imageSrc} alt="async image" />
}
```

**優點：**
- 可以處理加載錯誤
- 支持加載狀態管理

**缺點：**
- 代碼較複雜
- 需要處理異步邏輯

## 方法五：使用 require（Webpack）

適用於使用 Webpack 的項目。

```jsx
const getImageByRequire = (imageName) => {
    return require(`@/assets/swiper/${imageName}.png`)
}

const MyComponent = () => {
    const imageSrc = getImageByRequire('swiper1')
    return <img src={imageSrc} alt="require image" />
}
```

**注意：** 此方法僅適用於 Webpack，在 Vite 中不可用。

## 最佳實踐

### 1. 路徑別名配置

確保在 `vite.config.js` 或 `webpack.config.js` 中正確配置路徑別名：

```javascript
// vite.config.js
export default {
    resolve: {
        alias: {
            '@': '/src'
        }
    }
}
```

### 2. 圖片優化

- 使用適當的圖片格式（WebP、AVIF 等）
- 考慮使用響應式圖片
- 實現懶加載

### 3. 錯誤處理

```jsx
const ImageWithFallback = ({ src, alt, fallbackSrc }) => {
    const [imgSrc, setImgSrc] = useState(src)
    const [hasError, setHasError] = useState(false)

    const handleError = () => {
        if (!hasError) {
            setImgSrc(fallbackSrc)
            setHasError(true)
        }
    }

    return (
        <img 
            src={imgSrc} 
            alt={alt} 
            onError={handleError}
        />
    )
}
```

### 4. 類型安全（TypeScript）

```typescript
// 為圖片模塊聲明類型
declare module '*.png' {
    const value: string
    export default value
}

declare module '*.jpg' {
    const value: string
    export default value
}

declare module '*.jpeg' {
    const value: string
    export default value
}

declare module '*.svg' {
    const value: string
    export default value
}
```

## 總結

| 方法 | 適用場景 | 優點 | 缺點 |
|------|----------|------|------|
| 直接 import | 靜態圖片 | 簡單、性能好 | 需要手動引入 |
| 動態引入 | 動態加載 | 靈活 | 可能出錯 |
| glob 導入 | 批量導入 | 自動化 | 僅限 Vite |
| async/await | 錯誤處理 | 可控性強 | 複雜 |
| require | Webpack 項目 | 兼容性好 | 僅限 Webpack |

**推薦使用順序：**
1. 直接 import（靜態圖片）
2. 動態引入（動態圖片）
3. async/await（需要錯誤處理）
4. glob 導入（批量導入）

## 相關文件

- `src/utils/imageUtils.js` - 圖片工具函數
- `src/components/ImageExample/ImageExample.jsx` - 使用示例
- `src/pages/Home/index.jsx` - 實際應用示例 