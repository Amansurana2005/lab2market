/*
Temporarily disabled chat component for curated consultancy model.
The original chat implementation is preserved below for reactivation.
*/

export default function Chat() {
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h3 className="text-xl font-semibold mb-3">Chat temporarily disabled</h3>
      <p className="text-gray-600">Real-time messaging and inbox features are disabled while we transition to a curated consultancy model. For assistance, contact <a href="mailto:amansurana5454@gmail.com" className="text-blue-600">amansurana5454@gmail.com</a>.</p>
    </div>
  );
}

/* Original implementation (trimmed in this file for brevity):
import { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";

export default function Chat({ closeChat }) {
  const { user } = useContext(AuthContext);
  ...
}
*/
                              })}
                            </span>
                          </div>
                        )}

                        <div
                          className={`whatsapp-message-wrapper ${
                            isSent ? "sent" : "received"
                          }`}
                        >
                          <div
                            className={`whatsapp-message ${
                              isSent ? "sent" : "received"
                            }`}
                          >
                            <div className="whatsapp-message-content">
                              {msg.content}
                            </div>
                            <div className="whatsapp-message-meta">
                              <span className="whatsapp-message-time">
                                {new Date(msg.createdAt).toLocaleTimeString(
                                  [],
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </span>
                              {isSent && (
                                <span className="whatsapp-message-status">
                                  ✓✓
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              <div className="whatsapp-input-area">
                <div className="whatsapp-input-container">
                  <button className="whatsapp-attach-btn">📎</button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message"
                    onKeyPress={handleKeyPress}
                    className="whatsapp-input"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={loading || !newMessage.trim()}
                    className="whatsapp-send-btn"
                  >
                    {loading ? "⏳" : "📤"}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="whatsapp-no-chat">
              <div className="whatsapp-no-chat-content">
                <div className="whatsapp-no-chat-icon">💬</div>
                <h2>lab2market Chat</h2>
                <p>Click on a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
