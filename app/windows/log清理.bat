(echo XBС�������Ʒ ߣ�Ŵ�ʦlog�ļ�������
echo ���ȷ����ť�رմ˶Ի���Ȼ����ʾ��������)|msg %username%
pause
taskkill /im mshta.exe /f
cd C:\Program Files\Luhaodashi
del /f /s /q *.log
(echo ������ɣ������ر�ҳ��)|msg %username%
ping 127.0.0.1 -n 3 >nul