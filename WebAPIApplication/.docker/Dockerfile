FROM microsoft/dotnet:latest
WORKDIR /app
COPY bin/Debug/netcoreapp2.0/publish /app
ENV ASPNETCORE_URLS http://*:80
EXPOSE 80
ENTRYPOINT ["dotnet", "WebAPIApplication.dll"]