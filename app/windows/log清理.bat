(echo XB小报软件出品 撸号大师log文件清理工具
echo 点击确定按钮关闭此对话框，然后按提示继续操作)|msg %username%
pause
taskkill /im mshta.exe /f
cd C:\Program Files\Luhaodashi
del /f /s /q *.log
(echo 清理完成！三秒后关闭页面)|msg %username%
ping 127.0.0.1 -n 3 >nul