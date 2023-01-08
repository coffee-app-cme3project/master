from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options


# coffee shop credentials
username = "pawantomar"
password = "pawan@1234"
NAME = "name"
TAG_NAME = "tag name"

# initialize the Chrome driver
chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
#driver = webdriver.Chrome('/home/<user>/chromedriver',chrome_options=chrome_options)
driver = webdriver.Chrome("chromedriver",chrome_options=chrome_options)
#driver.find_element_by_id("login_field").send_keys(username)
# head to coffee shop login page
driver.get("http://localhost:8082")
#driver.find_element_by_name("username").send_keys(username)
#driver.find_element("name", "username").send_keys(username)
#driver.find_element_by_name("password").send_keys(password)
#driver.find_element("name", "password").send_keys(password)
# find password input field and insert password as well
#driver.find_element_by_id("password").send_keys(password)
# click login button
#driver.find_elements_by_xpath("/html/body/app-root/div/app-login/div[1]/div[1]/div[3]/div/button").click()
#driver.find_element("xpath", "/html/body/div/div/div/div[2]/form/button").click()
# wait the ready state to be complete
WebDriverWait(driver=driver, timeout=5).until(
    lambda x: x.execute_script("return document.readyState === 'complete'")
)
#WebDriverWaitWsait= WebDriverWait(driver=driver, timeout= 20)
#element1 = WebDriverWait(driver, 10).until(EC.presence_of_element_located(("xpath", '/html/body/app-root/app-alert/div')))
#print(driver.find_element(By.TAG_NAME, 'app-alert').get_attribute('textContent'))
#/html/body/div[2]/div/nav/div/div/div[2]/ul/li[5]
#working: /html/body/div/div/div/div[3]/a/button
try:
  element2 = WebDriverWait(driver, 10).until(EC.presence_of_element_located(("xpath", "/html/body/div[2]/div/nav/div/div/div[2]/ul/li[5]")))
  #element2 = WebDriverWait(driver, 10).until(EC.presence_of_element_located(("name", "logout")))
  print ("Hey, Login Done")

except:
  print ("Sorry, Login failed")
  raise Exception
finally:
  print("The 'try except' is finished")
  driver.close()
