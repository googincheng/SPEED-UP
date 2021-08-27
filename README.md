# SPEED UP
 彻底关闭其他文档，更顺滑地编辑当前文档。  
 Kill other documents, smoothly edit current document.
 
# Env
 macOS 11  
 Sketch 71
 
# Background
 Sketch gets very slow while opening multiple documents. Even though all the other documents are closed, it still make no difference until you restart the Sketch.

# Solution
 I wrote a script to kill other documents by killing the Sketch and reopening current document, which reducing the **times of interactions of restarting**.
 
# Analysis
 * ⬇️ I printed the **WinID** of one-document-opened Sketch and multi-document-opened-and-closeed Sketch. I Found that even though documents closed,the WinID still exsits. **I have to quit the Sketch (cmd + q) to kill all WinID**. I don't know if this's a bug of macOS. 

> one-document-opened Sketch

![one-document-opened Sketch](/image/sketch-initial.png)

> multi-document-opened-and-closeed Sketch

![multi-document-opened-and-closeed Sketch](/image/sketch-opened-multiple-doc.png)
 * ⬇️ Sketch creates **window state** at *'/Users/gujincheng/Library/Saved Application State/com.bohemiancoding.sketch3.savedState'* after document opened, but it deleted automatically after closing document. So this is not the reason.

> one-document-opened Sketch

![window-state](/image/window-state.png)

 * ⬇️ I also try clear **cache** at *'/Users/gujincheng/Library/Caches/com.bohemiancoding.sketch3'*, doesn't work either.

> one-document-opened Sketch

![cache](/image/cache.png)

# Conclusion
 It sucks that yet the only way to solve the problem is restarting. So if you have any idea, discussion welcomed!
 
